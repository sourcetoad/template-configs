import {describe, expect, it} from 'vitest';
import {lintCode} from '../../../test-utils/eslint';

describe('Vue ESLint Configuration Tests', () => {
    it('should enforce script indentation rules', async () => {
        const code = `<script>
export default {
data() {
return {};
},
};
</script>`;
        const results = await lintCode(code, 'packages/vue/eslint.config.js', '.vue');
        const scriptIndentIssues = results[0].messages.filter(msg => msg.ruleId === 'vue/script-indent');

        expect(scriptIndentIssues).to.have.lengthOf.at.least(1); // Check for at least one indentation error
        scriptIndentIssues.forEach(issue => {
            expect(issue.message).to.match(/Expected indentation of \d+ spaces but found 0/);
        });😂
    });
});
