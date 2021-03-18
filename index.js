const core = require("@actions/core");

async function run() {
  try {
    const ref = process.env.GITHUB_REF.split("/").slice(2).join("/");
    const target = process.env.GITHUB_BASE_REF.split("/").slice(2).join("/");
    const source = process.env.GITHUB_HEAD_REF.split("/").slice(2).join("/");
    core.exportVariable("REF_BRANCH", ref);
    core.exportVariable("TARGET_BRANCH", target);
    core.exportVariable("SOURCE_BRANCH", source);
    if (process.env.GITHUB_EVENT_NAME === "pull_request") {
      core.exportVariable("CURRENT_BRANCH", source);
    } else {
      core.exportVariable("CURRENT_BRANCH", ref);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
