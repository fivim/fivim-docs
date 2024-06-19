const conf = {
  site: "",
  base: "",
};

if (process.env.inCloudflare) {
  conf.site = "https://fivim.pages.dev";
} else {
  conf.site = "https://fivim.github.io";
  conf.base = "/fivim-docs";
}

export const siteAndBase = conf;
