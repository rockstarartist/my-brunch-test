
//;require.config({
//    paths: {
//        "react": "bower_components/react/react-with-addons"
//    },
//    shim: {
//        react: {
//            "exports": "React"
//        }
//    },
//    waitSeconds: 10
//});

;require(['components/appinit'], function (appInit) {
                appInit.init();
            });

