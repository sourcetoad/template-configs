import {ESLint} from 'eslint';
import {resolve} from 'node:path';

export async function lintCode(codeSnippet: string, configFile: string, fileType: string = '.js'): Promise<ESLint.LintResult[]> {
  const absolutePath = resolve(process.cwd(), configFile);

  const eslint = new ESLint({
    overrideConfigFile: absolutePath,
  });

  return await eslint.lintText(codeSnippet, {filePath: `test${fileType}`});
}
