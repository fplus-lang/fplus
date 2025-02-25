class SimpleLangCompiler {
    constructor(parser) {
        this.parser = parser;
        this.currentScope = {};
    }

    // Compile the AST
    compile(ast) {
        return this.visitProgram(ast);
    }

    visitProgram(ctx) {
        let output = "";
        for (let i = 0; i < ctx.statement().length; i++) {
            output += this.visitStatement(ctx.statement(i)) + "\n";
        }
        return output;
    }

    // Statement visitor
    visitStatement(ctx) {
        if (this.isType(ctx, "printExpr")) {
            return `console.log(${
                ctx.printExpr().exprList()
                    ? this.visitExprList(ctx.printExpr().exprList())
                    : ""
            });`;
        } else if (this.isType(ctx, "functionDeclaration")) {
            return this.visitFunctionDeclaration(ctx.functionDeclaration());
        } else if (this.isType(ctx, "anonymousFunctionDeclaration")) {
            return this.visitAnonymousFunctionDeclaration(
                ctx.anonymousFunctionDeclaration()
            );
        } else if (this.isType(ctx, "variableDeclaration")) {
            return this.visitVariableDeclaration(ctx.variableDeclaration());
        } else if (this.isType(ctx, "localVariableDeclaration")) {
            return this.visitLocalVariableDeclaration(
                ctx.localVariableDeclaration()
            );
        } else if (this.isType(ctx, "ifStatement")) {
            return this.visitIfStatement(ctx.ifStatement());
        } else if (this.isType(ctx, "whileStatement")) {
            return this.visitWhileStatement(ctx.whileStatement());
        } else if (this.isType(ctx, "forStatement")) {
            return this.visitForStatement(ctx.forStatement());
        } else if (this.isType(ctx, "breakStatement")) {
            return this.visitBreakStatement(ctx.breakStatement());
        } else if (this.hasExpr(ctx)) {
            return this.visitExpr(ctx.expr());
        }
        return "";
    }

    visitExprList(ctx) {
        let output = "";
        for (let i = 0; i < ctx.expr().length; i++) {
            output += `${this.visitExpr(ctx.expr(i))}${
                i !== ctx.expr().length - 1 ? ", " : ""
            }`;
        }
        return output;
    }

    visitExpr(ctx) {
        if (this.isType(ctx, "STRING")) {
            return ctx.STRING().getText();
        } else if (this.isType(ctx, "INTEGER")) {
            return ctx.INTEGER().getText();
        } else if (this.isType(ctx, "FLOAT")) {
            return ctx.FLOAT().getText();
        } else if (this.isType(ctx, "BOOLEAN")) {
            return ctx.BOOLEAN().getText();
        } else if (this.isType(ctx, "NIL")) {
            return "null";
        } else if (this.isType(ctx, "ID")) {
            return ctx.ID().getText();
        } else if (this.isType(ctx, "arithmeticExpr")) {
            return this.visitArithmeticExpr(ctx.arithmeticExpr());
        } else if (this.isType(ctx, "functionCall")) {
            return this.visitFunctionCall(ctx.functionCall());
        } else if (this.isType(ctx, "tableDeclaration")) {
            return this.visitTableDeclaration(ctx.tableDeclaration());
        } else if (this.isType(ctx, "tableAccess")) {
            return this.visitTableAccess(ctx.tableAccess());
        } /* else if (this.isType(ctx, "arrayExpr")) {
              return this.visitArrayExpr(ctx.arrayExpr());
          }*/
        return "";
    }

    // visitTableAccess will handle both dot notation (x.foo) and bracket notation (x[1])
    visitTableAccess(ctx) {
        const objectName = this.getText(ctx.ID(0)); // The object being accessed (x)
        const property = ctx.expr(1) || ctx.ID(1) // The second expression (foo for dot notation or 1 for array access)
        //console.log(thi)
        if (property) {
            // If the property is an integer, it should be treated as array access (x[1])
            if (this.isType(property, "INTEGER")) {
                const index = this.visitExpr(property);
                return `${objectName}[${index}]`; // Array-style access
            }
            // If the property is an ID (object property), treat it as dot notation (x.foo)
            else if (this.isType(property, "ID")) {
                const key = this.visitExpr(property); // Get the property name (foo)
                return `${objectName}.${key}`; // Dot notation access (x.foo)
            }
            // If the property is a string, treat it as array-style access (x["foo"])
            else if (this.isType(property, "STRING")) {
                const key = this.visitExpr(property); // Property is a string
                return `${objectName}[${key}]`; // Array-style access
            }
        }

        return "";
    }

    visitTableDeclaration(ctx) {
        const elements = ctx
            .keyValuePair()
            .map((kv) => this.visitKeyValuePair(kv))
            .join(",\n");
        const arrayValues = ctx
            .exprList(0)
            .children.filter((item) => !!item.expr)
            .map((expr, index) => `${index + 1}: ${this.visitExpr(expr)}`)
            .join(",\n");

        return `{
        ${elements}
        ${arrayValues ? ", " + arrayValues : ""}
      }`;
    }

    visitKeyValuePair(ctx) {
        const key = this.isType(ctx, "ID")
            ? this.getText(ctx.ID())
            : this.getText(ctx.STRING());
        const value = this.visitExpr(ctx.expr());
        return `${key}: ${value}`;
    }

    /*visitArrayExpr(ctx) {
      const elements = ctx.exprList()
        ? ctx
            .exprList()
            .map((expr) => this.visitExpr(expr))
            .join(", ")
        : "";
      return `[${elements}]`;
    }*/

    visitFunctionCall(ctx) {
        const functionName = !ctx.loadstring
            ? !ctx.anonymousFunctionDeclaration
                ? this.getText(ctx.ID())
                : this.visitAnonymousFunctionDeclaration(
                      ctx.anonymousFunctionDeclaration()
                  )
            : this.getText(ctx.ID()) || this.visitLoadstring(ctx.loadstring());
        const args = ctx.exprList() ? this.visitExprList(ctx.exprList()) : "";
        return `${functionName}(${args})`;
    }

    visitFunctionDeclaration(ctx) {
        const functionName = this.getText(ctx.ID());
        const local = this.getText(ctx.LOCAL()) !== "";
        const params = ctx.params()
            ? ctx
                  .params()
                  .ID()
                  .map((id) => this.getText(id))
                  .join(", ")
            : "";
        const statements = ctx
            .statement()
            .map((stmt) => this.visitStatement(stmt))
            .join("\n");
        const exists = this.currentScope.hasOwnProperty(functionName);
        if (!exists) {
            this.currentScope[functionName] = true;
        }
        return local
            ? `${
                  exists ? "" : "let "
              }${functionName} = ((${params}) => {\n${statements}\n})`
            : `function ${functionName}(${params}) {\n${statements}\n}`;
    }

    visitAnonymousFunctionDeclaration(ctx) {
        const params = ctx.params()
            ? ctx
                  .params()
                  .ID()
                  .map((id) => this.getText(id))
                  .join(", ")
            : "";
        const statements = ctx
            .statement()
            .map((stmt) => this.visitStatement(stmt))
            .join("\n");
        return `((${params}) => {\n${statements}\n})`;
    }

    visitIfStatement(ctx) {
        const condition = this.visitExpr(ctx.expr(0));
        let output = `if (${condition}) {\n${this.visitStatement(
            ctx.statement(0)
        )}\n}`;
        for (let i = 0; i < ctx.elseIfStatement().length; i++) {
            const elseIfCondition = this.visitExpr(
                ctx.elseIfStatement(i).expr()
            );
            output += ` else if (${elseIfCondition}) {\n${this.visitStatement(
                ctx.elseIfStatement(i).statement(0)
            )}\n}`;
        }
        if (ctx.elseStatement()) {
            output += ` else {\n${this.visitStatement(
                ctx.elseStatement().statement(0)
            )}\n}`;
        }
        return output;
    }

    visitWhileStatement(ctx) {
        const condition = this.visitExpr(ctx.expr());
        const statements = ctx
            .statement()
            .map((stmt) => this.visitStatement(stmt))
            .join("\n");
        return `while (${condition}) {\n${statements}\n}`;
    }

    visitForStatement(ctx) {
        const variable = this.getText(ctx.ID());
        const iterable = this.visitExpr(ctx.expr());
        const statements = ctx
            .statement()
            .map((stmt) => this.visitStatement(stmt))
            .join("\n");
        return `for (let ${variable} of ${iterable}) {\n${statements}\n}`;
    }

    visitBreakStatement(ctx) {
        return "break;";
    }

    visitArithmeticExpr(ctx) {
        const leftOperand = this.visitExpr(ctx.expr(0));
        const operator = ctx.getChild(1).getText();
        const rightOperand = this.visitExpr(ctx.expr(1));
        return `${leftOperand} ${operator} ${rightOperand}`;
    }

    visitVariableDeclaration(ctx) {
        const variableName = this.getText(ctx.ID());
        const value = this.visitExpr(ctx.expr());
        return `${variableName} = ${value};`;
    }

    visitLocalVariableDeclaration(ctx) {
        const variableName = this.getText(ctx.ID());
        const value = this.visitExpr(ctx.expr());
        if (this.currentScope.hasOwnProperty(variableName)) {
            return `${variableName} = ${value};`;
        } else {
            this.currentScope[variableName] = true;
            return `let ${variableName} = ${value};`;
        }
    }

    visitVariableAccess(ctx) {
        const variableName = this.getText(ctx.ID());
        return variableName;
    }

    getText(ctx) {
        return (() => {
            try {
                return ctx.getText();
            } catch (e) {
                return "";
            }
        })();
    }

    // Helper methods for context type checking
    hasExpr(ctx) {
        return (() => {
            try {
                return ctx.expr();
            } catch (e) {
                return false;
            }
        })();
    }

    isType(ctx, type) {
        return (() => {
            try {
                return ctx[type]();
            } catch (e) {
                return false;
            }
        })();
    }
}

module.exports = SimpleLangCompiler;
