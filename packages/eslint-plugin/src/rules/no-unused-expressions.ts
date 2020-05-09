import { AST_NODE_TYPES } from '@typescript-eslint/experimental-utils';
import baseRule from 'eslint/lib/rules/no-unused-expressions';
import * as util from '../util';

export default util.createRule({
  name: 'no-unused-expressions',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow unused expressions',
      category: 'Best Practices',
      recommended: false,
      extendsBaseRule: true,
    },
    schema: baseRule.meta.schema,
    messages: baseRule.meta.messages,
  },
  defaultOptions: [],
  create(context) {
    const rules = baseRule.create(context);

    return {
      ExpressionStatement(node): void {
        if (
          node.directive ||
          node.expression.type === AST_NODE_TYPES.OptionalCallExpression
        ) {
          return;
        }

        rules.ExpressionStatement(node);
      },
    };
  },
});
