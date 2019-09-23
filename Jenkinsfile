
import hudson.*
import groovy.json.JsonSlurperClassic
import groovy.json.JsonOutput
import java.io.File

def response

node('master') {
    stage('Clone sources') {
        git branch: 'new-branch', url: 'https://github.com/igorkokotko/jenkins-test.git'
    }
    stage('Monitor package.json') {
        def latestCommit = sh(returnStdout: true, script: "git log --pretty=format:'%H' -1")
        def pullRequestLatestCommit = sh(returnStdout: true, script: "git log -n 1 origin/master --pretty=format:'%H'")

        try {
           def packageJsonChanged = sh(returnStdout: true, script: "git diff ${latestCommit} ${pullRequestLatestCommit} --name-only | grep package.json")
            filename = envVars.get('WORKSPACE')
            echo filename
            if(packageJsonChanged) {
                File fh1 = new File( 'Dockerfile' )
                text = fh1.getText('UTF-8')
                echo text
                echo 'changed'
            } else {
                echo 'not changed'
            }
        } catch (Exception e) {
            println("Exception: ${e}")
        }

    }
}

