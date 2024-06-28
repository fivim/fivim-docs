const conf = {
  site: "",
  base: "",
  prefix: "",
};

// if (process.env.inCloudflare) {
conf.site = "https://fivim.top";
conf.base = "";
// } else {
//   conf.site = "https://fivim.github.io";
//   conf.base = "/fivim-docs";
// }

conf.prefix = conf.site + conf.base;

export const siteConf = conf;
