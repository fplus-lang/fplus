class SimpleLangCompiler {
  constructor(parser) {
    this.parser = parser;
    this.currentScope = {};
  }
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
  visitStatement(ctx) {
    if (this.isType(ctx, "printExpr")) {
      return `console.log(${
        ctx.printExpr().exprList()
          ? this.visitExprList(ctx.printExpr().exprList())
          : ""
      })`;
    } else if (this.isType(ctx, "functionDeclaration")) {
      return this.visitFunctionDeclaration(ctx.functionDeclaration());
    } else if (this.isType(ctx, "objectDeclaration")) {
      return this.visitObjectDeclaration(ctx.objectDeclaration());
    } else if (this.isType(ctx, "variableDeclaration")) {
      return this.visitVariableDeclaration(ctx.variableDeclaration());
    } else if (this.isType(ctx, "localVariableDeclaration")) {
      return this.visitLocalVariableDeclaration(ctx.localVariableDeclaration());
    } else if (this.isType(ctx, "ifStatement")) {
      return this.visitIfStatement(ctx.ifStatement());
    } else if (this.isType(ctx, "whileStatement")) {
      return this.visitWhileStatement(ctx.whileStatement());
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
    } else if (this.isType(ctx, "ID")) {
      return ctx.ID().getText();
    } else if (this.isType(ctx, "arithmeticExpr")) {
      return this.visitArithmeticExpr(ctx.arithmeticExpr());
    } else if (this.isType(ctx, "arrayExpr")) {
      return this.visitArrayExpr(ctx.arrayExpr());
    } else if (this.isType(ctx, "objectExpr")) {
      return this.visitObjectDeclaration(ctx.objectExpr());
    } else if (this.isType(ctx, "parens")) {
      return `(${this.visitExpr(ctx.parens().expr())})`;
    } else if (this.isType(ctx, "functionCall")) {
      return this.visitFunctionCall(ctx.functionCall());
    } else if (this.isType(ctx, "objectAccess")) {
      return this.visitObjectAccess(ctx.objectAccess());
    } else if (this.isType(ctx, "arrayAccess")) {
      return this.visitArrayAccess(ctx.arrayAccess());
    } else if (this.isType(ctx, "inlineJsExpr")) {
      return this.visitInlineJsExpr(ctx.inlineJsExpr());
    } else if (this.isType(ctx, "javaScriptEmbed")) {
      return this.visitJavaScriptEmbed(ctx.javaScriptEmbed());
    } else if (this.isType(ctx, "variableAccess")) {
      return this.visitVariableAccess(ctx.variableAccess());
    } else if (this.isType(ctx, "localVariableAccess")) {
      return this.visitLocalVariableAccess(ctx.localVariableAccess());
    }
    return "";
  }
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
  visitFunctionCall(ctx) {
    const functionName = this.getText(ctx.ID());
    const args = ctx.exprList() ? this.visitExprList(ctx.exprList()) : "";
    return `${functionName}(${args})`;
  }
  visitObjectAccess(ctx) {
    const objectName = this.getText(ctx.ID(0));
    const propertyName = this.getText(ctx.ID(1));
    return `${objectName}.${propertyName}`;
  }
  visitArrayAccess(ctx) {
    const arrayName = this.getText(ctx.ID());
    const index = this.getText(ctx.INTEGER());
    return `${arrayName}[${index}]`;
  }
  visitFunctionDeclaration(ctx) {
    const functionName = this.getText(ctx.ID());
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
    return `function ${functionName}(${params}) {\n${statements}\n}`;
  }
  visitObjectDeclaration(ctx) {
    const keyValues = ctx
      .keyValuePair()
      .map((kv) => this.visitKeyValuePair(kv))
      .join(",\n");
    return `{\n${keyValues}\n}`;
  }
  visitKeyValuePair(ctx) {
    const key = this.isType(ctx, "ID")
      ? this.getText(ctx.ID())
      : this.getText(ctx.STRING());
    const value = this.visitExpr(ctx.expr());
    return `${key}: ${value}`;
  }
  visitArrayExpr(ctx) {
    const elements = ctx.exprList() ? this.visitExprList(ctx.exprList()) : "";
    return `[${elements}]`;
  }
  visitInlineJsExpr(ctx) {
    const expr = this.getText(ctx.INLINE_JS_EXPR()).slice(2, -2);
    return `eval(${JSON.stringify(expr)})`;
  }
  visitJavaScriptEmbed(ctx) {
    const jsCode = this.getText(ctx.JAVASCRIPT_EMBED()).slice(2, -2);
    return jsCode;
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
      return `${variableName} = ${value};`; // Variable already declared, update its value
    } else {
      this.currentScope[variableName] = true; // Mark variable as declared in the current scope
      return `let ${variableName} = ${value};`; // Declare variable
    }
  }
  visitVariableAccess(ctx) {
    const variableName = this.getText(ctx.ID());
    return variableName;
  }
  visitLocalVariableAccess(ctx) {
    const variableName = this.getText(ctx.ID());
    return variableName;
  }
  visitIfStatement(ctx) {
    const condition = this.visitExpr(ctx.expr(0));
    const thenStatements = this.visitStatement(ctx.statement(0));
    let output = `if (${condition}) {\n${thenStatements}\n}`;

    for (let i = 0; i < ctx.elseIfStatement().length; i++) {
      const elseIfCondition = this.visitExpr(ctx.elseIfStatement(i).expr());
      const elseIfThenStatements = this.visitStatement(
        ctx.elseIfStatement(i).statement(0)
      );
      output += ` else if (${elseIfCondition}) {\n${elseIfThenStatements}\n}`;
    }

    if (ctx.elseStatement()) {
      const elseStatements = this.visitStatement(
        ctx.elseStatement().statement(0)
      );
      output += ` else {\n${elseStatements}\n}`;
    }

    return output;
  }

  visitWhileStatement(ctx) {
    const condition = this.visitExpr(ctx.expr());
    var statements = ctx.statement(0);
    statements = this.visitStatement(stat);
    return `while (${condition}) {\n${statements}\n}`;
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
}
module.exports = SimpleLangCompiler;
