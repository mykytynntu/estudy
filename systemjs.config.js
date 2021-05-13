(function (global) {
    var map = {
        "crm-dev-app": "",
        "crm-prod-app": "/src",

        "moment": 'node_modules/moment/moment.js',
        '@angular/upgrade/static': 'node_modules/@angular/upgrade/bundles/upgrade-static.umd.js',
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/common/http': 'node_modules/@angular/common/bundles/common-http.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
        'rxjs': 'node_modules/rxjs',
        'core-js': 'node_modules/core-js',
        'zone.js': 'node_modules/zone.js',

        '@angular/material': 'node_modules/@angular/material/bundles/material.umd.js',
        '@angular/cdk/platform': 'node_modules/@angular/cdk/bundles/cdk-platform.umd.js',
        '@angular/cdk/a11y': 'node_modules/@angular/cdk/bundles/cdk-a11y.umd.js',
        '@angular/cdk/bidi': 'node_modules/@angular/cdk/bundles/cdk-bidi.umd.js',
        '@angular/cdk/coercion': 'node_modules/@angular/cdk/bundles/cdk-coercion.umd.js',
        '@angular/cdk/keycodes': 'node_modules/@angular/cdk/bundles/cdk-keycodes.umd.js',
        '@angular/cdk/observers': 'node_modules/@angular/cdk/bundles/cdk-observers.umd.js',
        '@angular/cdk/overlay': 'node_modules/@angular/cdk/bundles/cdk-overlay.umd.js',
        '@angular/cdk/scrolling': 'node_modules/@angular/cdk/bundles/cdk-scrolling.umd.js',
        '@angular/cdk/portal': 'node_modules/@angular/cdk/bundles/cdk-portal.umd.js',
        '@angular/cdk/layout': 'node_modules/@angular/cdk/bundles/cdk-layout.umd.js',
        '@angular/cdk/collections': 'node_modules/@angular/cdk/bundles/cdk-collections.umd.js',
        '@angular/cdk/text-field': 'node_modules/@angular/cdk/bundles/cdk-text-field.umd.js',
        '@angular/cdk/accordion': 'node_modules/@angular/cdk/bundles/cdk-accordion.umd.js',
        '@angular/cdk/common': 'node_modules/@angular/cdk/bundles/cdk-common.umd.js',
        '@angular/cdk/table': 'node_modules/@angular/cdk/bundles/cdk-table.umd.js',
        '@angular/cdk/stepper': 'node_modules/@angular/cdk/bundles/cdk-stepper.umd.js',
        '@angular/cdk/tree': 'node_modules/@angular/cdk/bundles/cdk-tree.umd.js',

        '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.js',
        '@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',

        'dragula': 'node_modules/dragula/dist/dragula.js',
        'ng2-dragula': 'node_modules/ng2-dragula/dist/bundles/ng2-dragula.umd.js',
        'angular2-moment': 'node_modules/angular2-moment/index.js',

        'ngx-color-picker': 'node_modules/ngx-color-picker/bundles/ngx-color-picker.umd.min.js',
        'hammerjs': 'node_modules/hammerjs/hammer.min.js',
        'driver.js': 'node_modules/driver.js/dist/driver.min.js',
        'highcharts': 'node_modules/highcharts/highcharts.js',
        'angular-highcharts': 'node_modules/angular-highcharts/angular-highcharts.umd.js',

        '@fortawesome/angular-fontawesome': 'node_modules/@fortawesome/angular-fontawesome/bundles/angular-fontawesome.umd.min.js',
        '@fortawesome/fontawesome-svg-core': 'node_modules/@fortawesome/fontawesome-svg-core/index.js',
        '@fortawesome/free-solid-svg-icons': 'node_modules/@fortawesome/free-solid-svg-icons/index.js',
        '@fortawesome/free-brands-svg-icons': 'node_modules/@fortawesome/free-brands-svg-icons/index.js',
        '@fortawesome/free-regular-svg-icons': 'node_modules/@fortawesome/free-regular-svg-icons/index.js',

        '@ngrx/core': 'node_modules/@ngrx/core/bundles/core.min.umd.js',
        '@ngrx/store': 'node_modules/@ngrx/store/bundles/store.umd.min.js',
        '@ngrx/effects': 'node_modules/@ngrx/effects/bundles/effects.umd.min.js',

        'tslib': 'node_modules/tslib/tslib.js',
        'xlsx': 'node_modules/xlsx/dist/xlsx.min.js'
    };

    var packages = {
        "crm-dev-app": {main: './main.js', defaultExtension: "js"},
        "crm-prod-app": {main: "./main.js", defaultExtension: "js"},
        'rxjs': { main: 'index.js', defaultExtension: 'js' },
        'rxjs/operators': {main: 'index.js', defaultExtension: 'js' },
        'core-js': {main: 'index.js', defaultExtension: 'js' },
        'zone.js': {main: 'dist/zone.js', defaultExtension: 'js' },
        'dragula': { defaultExtension: 'js' },
        'ng2-dragula': {defaultExtension: 'js' }
    };


    var meta = {
        'moment': {format: 'global'}
    };

    var config = {
        baseURL: "/",
        transpiler: "typescript",
        meta: meta,
        map: map,
        packages: packages
    };
    System.config(config);
})(this);