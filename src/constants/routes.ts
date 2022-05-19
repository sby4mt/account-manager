export const routes = {
  root: "/",
  top: "/top",
  app: "/app",
  template: {
    index: "/app/template",
  },
  register: {
    index: "/app/register"
  },
  accountList: {
    index: "/app/account-list"
  },
  config: {
    index: "/app/config"
  }
} as const;
export type Routes = typeof routes[keyof typeof routes];