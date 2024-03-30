const args = process.argv.slice(2);
if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
  console.log(
    `
Usage: node index.js <input_file> [options]
  
Options:
  -h, --help      Print this help message
  -d, --debug     Print the parse tree
  -m, --minify    Minify the compiled code
  -e, --eval      Evaluate the compiled code
  -s, --save      Save the compiled code and output(if -e or --eval are specified)

Arguments:
  input_file      Path to the input file containing the fplus code

Examples:
  node index.js test.fpl               Compiles the fplus code to JavaScript, prints it, and does nothing else
  node index.js test.fpl -d -e -m -s   Prints the parse tree, compiles it to JavaScript, evaluates it, and saves it
`
  );
  process.exit();
}
const { readFileSync, writeFileSync } = require("fs");
const { InputStream, CommonTokenStream } = require("antlr4");
const { highlight } = require("cli-highlight");
const { runInThisContext } = require("vm");
const { format } = require("util");
const { minify } = require("uglify-js");
const chalk = require("chalk");
const SimpleLangLexer = require("./lib/fplusLexer").default;
const SimpleLangParser = require("./lib/fplusParser").default;
const SimpleLangCompiler = require("./compiler");

// Read input file
const code = readFileSync(args[0], "utf8");

// Create compiler instance
const input = new InputStream(code);
const lexer = new SimpleLangLexer(input);
const tokens = new CommonTokenStream(lexer);
const parser = new SimpleLangParser(tokens);
parser.buildParseTrees = true;
const tree = parser.program();
//console.log(args)
if (args.includes("-d") || args.includes("--debug"))
  console.log(tree.toStringTree(null, parser) + "\n");
// Compile code
const compiler = new SimpleLangCompiler(parser);
var compiledCode = compiler.compile(tree);
if (args.includes("-m") || args.includes("--minify")) {
  compiledCode = minify(compiledCode, {
    toplevel: true,
    compress: {
      passes: 3,
      evaluate: true,
    },
    mangle: {
      toplevel: true,
      eval: true,
    },
  }).code;
}
// Evaluate compiled code
console.log(chalk.blue.bold("Compiled Code:\n"));
console.log(
  compiledCode
    ? highlight(compiledCode, {
        language: "js",
      })
    : "<blank compiled code>\n"
);
const e = args.includes("-e") || args.includes("--eval");
if (e) console.log(chalk.blue.bold("Compiled Code Output:\n"));

// Function to capture console output
function captureConsoleOutput(callback) {
  const logs = [];
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    logs.push(format(...args));
  };
  callback();
  console.log = originalConsoleLog;
  return logs.join("\n");
}
if (e) {
  var out = captureConsoleOutput(() => runInThisContext(compiledCode));
  console.log(out ? chalk.green(out) + "\n" : "<blank compiled code output>\n");
}

if (args.includes("-s") || args.includes("--save")) {
  writeFileSync(`${args[0]}.js`, compiledCode);
  console.log(
    chalk.blue.bold(`Saved Compiled Code To "${args[0]}.js"${e ? "\n" : ""}`)
  );
  if (e) {
    writeFileSync(`${args[0]}.out`, out);
    console.log(
      chalk.blue.bold(`Saved Compiled Code Output To "${args[0]}.out"`)
    );
  }
}
console.log(chalk.blue.bold(`\nFinished in ${performance.now()} ms\n`));
