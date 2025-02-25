import { defineConfig } from 'cypress';

export default defineConfig({
    projectId: 'qhyo66',

    component: {
        devServer: {
            framework: 'angular',
            bundler: 'webpack',
        },
        specPattern: 'projects/ngx-mask-lib/src/test/**/*.cy-spec.ts',
    },

    defaultCommandTimeout: 10000,
});
