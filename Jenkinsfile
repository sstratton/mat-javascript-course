pipeline {
    agent any

    parameters {}

    triggers { pollSCM('* * * * *') }

    stage ('Install Dependencies') {
        steps {
            bat "npm install"
        }
    }

    stage ('Start Selenium Server and Run Acceptance Tests') {
        steps {
            bat "START /B npx webdriver-manager start && npm test"
        }
        post {
            always {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: false,
                    reportDir: '.tmp/report',
                    reportFiles: 'index.html',
                    reportName: 'BDD report',
                    reportTitles: '',
                ])
            }
        }

    }

}