/**
 * @fileoverview The AST node types produced by the parser.
 * @author Nicholas C. Zakas
 * @author James Henry <https://github.com/JamesHenry>
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */
export enum AST_NODE_TYPES {
  ArrayExpression = 'ArrayExpression',
  ArrayPattern = 'ArrayPattern',
  ArrowFunctionExpression = 'ArrowFunctionExpression',
  AssignmentExpression = 'AssignmentExpression',
  AssignmentPattern = 'AssignmentPattern',
  AwaitExpression = 'AwaitExpression',
  BigIntLiteral = 'BigIntLiteral',
  BinaryExpression = 'BinaryExpression',
  BlockStatement = 'BlockStatement',
  BreakStatement = 'BreakStatement',
  CallExpression = 'CallExpression',
  CatchClause = 'CatchClause',
  ClassBody = 'ClassBody',
  ClassDeclaration = 'ClassDeclaration',
  ClassExpression = 'ClassExpression',
  ClassImplements = 'ClassImplements',
  ClassProperty = 'ClassProperty',
  ConditionalExpression = 'ConditionalExpression',
  ContinueStatement = 'ContinueStatement',
  DebuggerStatement = 'DebuggerStatement',
  Decorator = 'Decorator',
  DoWhileStatement = 'DoWhileStatement',
  EmptyStatement = 'EmptyStatement',
  ExportAllDeclaration = 'ExportAllDeclaration',
  ExportDefaultDeclaration = 'ExportDefaultDeclaration',
  ExportNamedDeclaration = 'ExportNamedDeclaration',
  ExportSpecifier = 'ExportSpecifier',
  ExpressionStatement = 'ExpressionStatement',
  ForInStatement = 'ForInStatement',
  ForOfStatement = 'ForOfStatement',
  ForStatement = 'ForStatement',
  FunctionDeclaration = 'FunctionDeclaration',
  FunctionExpression = 'FunctionExpression',
  GenericTypeAnnotation = 'GenericTypeAnnotation',
  Identifier = 'Identifier',
  IfStatement = 'IfStatement',
  Import = 'Import',
  ImportDeclaration = 'ImportDeclaration',
  ImportDefaultSpecifier = 'ImportDefaultSpecifier',
  ImportNamespaceSpecifier = 'ImportNamespaceSpecifier',
  ImportSpecifier = 'ImportSpecifier',
  JSXAttribute = 'JSXAttribute',
  JSXClosingElement = 'JSXClosingElement',
  JSXClosingFragment = 'JSXClosingFragment',
  JSXElement = 'JSXElement',
  JSXEmptyExpression = 'JSXEmptyExpression',
  JSXExpressionContainer = 'JSXExpressionContainer',
  JSXFragment = 'JSXFragment',
  JSXIdentifier = 'JSXIdentifier',
  JSXMemberExpression = 'JSXMemberExpression',
  JSXNamespacedName = 'JSXNamespacedName',
  JSXOpeningElement = 'JSXOpeningElement',
  JSXOpeningFragment = 'JSXOpeningFragment',
  JSXSpreadAttribute = 'JSXSpreadAttribute',
  JSXSpreadChild = 'JSXSpreadChild',
  JSXText = 'JSXText',
  LabeledStatement = 'LabeledStatement',
  Literal = 'Literal',
  LogicalExpression = 'LogicalExpression',
  MemberExpression = 'MemberExpression',
  MetaProperty = 'MetaProperty',
  MethodDefinition = 'MethodDefinition',
  NewExpression = 'NewExpression',
  ObjectExpression = 'ObjectExpression',
  ObjectPattern = 'ObjectPattern',
  Program = 'Program',
  Property = 'Property',
  RestElement = 'RestElement',
  ReturnStatement = 'ReturnStatement',
  SequenceExpression = 'SequenceExpression',
  SpreadElement = 'SpreadElement',
  Super = 'Super',
  SwitchCase = 'SwitchCase',
  SwitchStatement = 'SwitchStatement',
  TaggedTemplateExpression = 'TaggedTemplateExpression',
  TemplateElement = 'TemplateElement',
  TemplateLiteral = 'TemplateLiteral',
  ThisExpression = 'ThisExpression',
  ThrowStatement = 'ThrowStatement',
  TryStatement = 'TryStatement',
  UnaryExpression = 'UnaryExpression',
  UpdateExpression = 'UpdateExpression',
  VariableDeclaration = 'VariableDeclaration',
  VariableDeclarator = 'VariableDeclarator',
  WhileStatement = 'WhileStatement',
  WithStatement = 'WithStatement',
  YieldExpression = 'YieldExpression',
  /**
   * TS-prefixed nodes
   */
  TSAbstractClassDeclaration = 'TSAbstractClassDeclaration',
  TSAbstractClassProperty = 'TSAbstractClassProperty',
  TSAbstractKeyword = 'TSAbstractKeyword',
  TSAbstractMethodDefinition = 'TSAbstractMethodDefinition',
  TSAnyKeyword = 'TSAnyKeyword',
  TSArrayType = 'TSArrayType',
  TSAsExpression = 'TSAsExpression',
  TSAsyncKeyword = 'TSAsyncKeyword',
  TSBooleanKeyword = 'TSBooleanKeyword',
  TSBigIntKeyword = 'TSBigIntKeyword',
  TSConditionalType = 'TSConditionalType',
  TSConstructorType = 'TSConstructorType',
  TSCallSignatureDeclaration = 'TSCallSignatureDeclaration',
  TSConstructSignatureDeclaration = 'TSConstructSignatureDeclaration',
  TSDeclareKeyword = 'TSDeclareKeyword',
  TSDeclareFunction = 'TSDeclareFunction',
  TSEnumDeclaration = 'TSEnumDeclaration',
  TSEnumMember = 'TSEnumMember',
  TSExportAssignment = 'TSExportAssignment',
  TSExportKeyword = 'TSExportKeyword',
  TSExternalModuleReference = 'TSExternalModuleReference',
  TSImportType = 'TSImportType',
  TSInferType = 'TSInferType',
  TSLiteralType = 'TSLiteralType',
  TSIndexedAccessType = 'TSIndexedAccessType',
  TSIndexSignature = 'TSIndexSignature',
  TSInterfaceBody = 'TSInterfaceBody',
  TSInterfaceDeclaration = 'TSInterfaceDeclaration',
  TSInterfaceHeritage = 'TSInterfaceHeritage',
  TSImportEqualsDeclaration = 'TSImportEqualsDeclaration',
  TSFunctionType = 'TSFunctionType',
  TSMethodSignature = 'TSMethodSignature',
  TSModuleBlock = 'TSModuleBlock',
  TSModuleDeclaration = 'TSModuleDeclaration',
  TSNamespaceExportDeclaration = 'TSNamespaceExportDeclaration',
  TSNonNullExpression = 'TSNonNullExpression',
  TSNeverKeyword = 'TSNeverKeyword',
  TSNullKeyword = 'TSNullKeyword',
  TSNumberKeyword = 'TSNumberKeyword',
  TSMappedType = 'TSMappedType',
  TSObjectKeyword = 'TSObjectKeyword',
  TSParameterProperty = 'TSParameterProperty',
  TSPrivateKeyword = 'TSPrivateKeyword',
  TSPropertySignature = 'TSPropertySignature',
  TSProtectedKeyword = 'TSProtectedKeyword',
  TSPublicKeyword = 'TSPublicKeyword',
  TSQualifiedName = 'TSQualifiedName',
  TSQuestionToken = 'TSQuestionToken',
  TSReadonlyKeyword = 'TSReadonlyKeyword',
  TSRestType = 'TSRestType',
  TSStaticKeyword = 'TSStaticKeyword',
  TSStringKeyword = 'TSStringKeyword',
  TSSymbolKeyword = 'TSSymbolKeyword',
  TSThisType = 'TSThisType',
  TSTypeAnnotation = 'TSTypeAnnotation',
  TSTypeAliasDeclaration = 'TSTypeAliasDeclaration',
  TSTypeAssertion = 'TSTypeAssertion',
  TSTypeLiteral = 'TSTypeLiteral',
  TSTypeOperator = 'TSTypeOperator',
  TSTypeParameter = 'TSTypeParameter',
  TSTypeParameterDeclaration = 'TSTypeParameterDeclaration',
  TSTypeParameterInstantiation = 'TSTypeParameterInstantiation',
  TSTypePredicate = 'TSTypePredicate',
  TSTypeReference = 'TSTypeReference',
  TSTypeQuery = 'TSTypeQuery',
  TSIntersectionType = 'TSIntersectionType',
  TSTupleType = 'TSTupleType',
  TSOptionalType = 'TSOptionalType',
  TSParenthesizedType = 'TSParenthesizedType',
  TSUnionType = 'TSUnionType',
  TSUndefinedKeyword = 'TSUndefinedKeyword',
  TSUnknownKeyword = 'TSUnknownKeyword',
  TSVoidKeyword = 'TSVoidKeyword'
}
