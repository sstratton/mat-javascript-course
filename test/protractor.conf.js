exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:8080',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    plugins:[{

        package: 'protractor-multiple-cucumber-html-reporter-plugin',

        automaticallyGenerateReport: true,

        removeExistingJsonReportFile: true 

    }],

    specs: [
        'features/*.feature'
    ],

    cucumberOpts: {

        require: 'features/step_definitions/*steps.js',
        tags: false,
        format: 'json:results.json',
        profile:false,
        'no-source': true

    }





}