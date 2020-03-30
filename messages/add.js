module.exports = {
  "commandDescription": "Add custom rules to use while scanning. Rules should have been compiled and tested separately. Users can refer to PMD’s documentation on information and examples to write your own custom rules: https://pmd.github.io/latest/pmd_userdocs_extending_writing_pmd_rules.html",
  "flags": {
    "languageDescription": "Programming language for which custom rules are added.",
    "pathDescription": "Comma-separated list to paths that lead to custom rule definitions. These paths could be one or more of:\n1. Jar file with compiled rule classes and one or more Rule definition XML file(s)\n2. Directory to multiple jar files, each with compiled rule classes. Rule definition XML file(s) could be part of the jar files or directly placed under the directory\n3. Directory with package-structured rule classes and Rule definition XML file(s) at some level\n\nTo distinguish Rulesets XML vs Category XML:\n1. Ensure that rulesets XML have “rulesets” in the directory path\n2. XMLs that do not have “rulesets” in the directory path would be handled as Category XML by default"
  },
  "validations": {
    "languageCannotBeEmpty": "Language cannot be empty",
    "pathCannotBeEmpty": "Path cannot be empty"
  },
  "errors": {
    "invalidFilePath": "Failed to find any file or directory with path: %s",
    "readCustomRulePathFileFailed": "Failed to read custom rule path file: %s",
    "writeCustomRulePathFileFailed": "Failed to write to custom rule path file: %s"
  }
};