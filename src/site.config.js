const conf = {
  site: "",
  base: "",
};

if (process.env.inCloudflare) {
  conf.site = "https://enassi.pages.dev";
} else {
  conf.site = "https://enassi.github.io";
  conf.base = "/enassi-docs";
}

export const siteAndBase = conf;
