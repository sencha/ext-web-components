//https://medium.com/@jotadeveloper/abstract-syntax-trees-on-javascript-534e33361fc7
//https://astexplorer.net/
//http://mazurov.github.io/escope-demo/
//https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md
//https://babeljs.io/docs/en/babel-types

module.exports = class Parser {
    constructor() {
    }

    parseIt(file) {
        const babelParser = require("@babel/parser").parse
        var options = {
            sourceType: 'module',
            // strictMode: true,
            // plugins: [
            //     "jsx",
            //     "flow"
            // ]
        }
        this.ast = babelParser(file, options)
        this.className = this.ast.program.body[0].expression.arguments[0].value
        this.properties = this.ast.program.body[0].expression.arguments[1].properties
    }

    getProperty(name) {
        var returnVal = 'not found'
        var BreakException = {}
        try {
            this.properties.forEach(function (property, index, array) {
                if (property.key.name == name) {
                    if (property.value.type == 'StringLiteral') {
                        returnVal = property.value.value
                    }
                    else {
                        returnVal = 'only literals'
                    }
                    throw BreakException
                }
            })
        }
        catch (e) {if (e !== BreakException) throw e;}
        return returnVal
    }
    
    setProperty(name, value) {
        var returnVal = -2
        var BreakException = {}
        try {
            this.properties.forEach(function (property, index, array) {
                if (property.key.name == name) {
                    if (property.value.type == 'StringLiteral') {
                        property.value.value = value
                        returnVal = 0
                    }
                    else {
                        returnVal = -1
                    }
                    throw BreakException
                }
            })
        }
        catch (e) {if (e !== BreakException) throw e;}
        return returnVal
    }
    
    addProperty(name, value) {
        const t = require('@babel/types');
        this.properties.splice(0,0,t.objectProperty(t.identifier(name), t.stringLiteral(value),))
    }
    
    generateCode() {
        const generate = require('@babel/generator').default;
        const { code }= generate(this.ast, {
            //auxiliaryCommentBefore: 'comment before',
            //auxiliaryCommentAfter: 'comment after',
            jsonCompatibleStrings: false,
            retainLines: false
        });
        return code
    }
    
    printAllProperties(properties) {
        this.properties.forEach(function (property, index, array) {
            var name = property.key.name
            var value = property.value
            var type = property.value.type
            switch(type) {
                case 'StringLiteral':
                    console.log(name + ': ' + value.value)
                    break;
                case 'ArrayExpression':
                    console.log(name + ' ' + value.elements)
                    break;
                case 'ObjectExpression':
                    console.log(name + ' ' + value.properties)
                    break;
                default:
                    console.log('not handled')
            }
        })
    }

}







// traverse(ast, {
//     ObjectExpression: function(path) {
//          const { node } = path
//     },
//     VariableDeclaration: function(path) {
//         // path.insertBefore(t.importDeclaration([t.importSpecifier(t.identifier('reactify'), t.identifier('reactify'))],t.stringLiteral(`@sencha/ext-react`)))

//         // path.container.splice(0,0,
//         // //path.container.push(
//         //     t.variableDeclaration('const', [
//         //       t.variableDeclarator(
//         //         t.identifier('local'),
//         //         t.callExpression(
//         //           t.identifier('reactify'),
//         //           [t.stringLiteral('imported')]
//         //         )
//         //       )
//         //     ])
//         //   )
//     },
//     Identifier: function(path) {
//         const { node } = path
//     },
// 	enter: function (path, parent) {
//         const { node } = path
//         if (node.type == 'Identifier') {
//             //    console.log(node.type + ' ' + node.name)
//         }
// 	},
//     Property(path) {
//         if (path.node.key.name == 'title') {
//             path.node.value.value = 'edited value'
//             // console.log("\n\n*Property")
//             // console.log(path.node)
//             // console.log(path.node.key.name)
//             // console.log(path.node.value.value)
//             //path.node.key.name = 'mjg'
//             //path.node.value.value = 'changed'
//         }
//     }
//   })
