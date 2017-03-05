#!/usr/bin/env node

'use strict'

function isFirstJob () {
  if (process.env.TRAVIS) {
    return process.env.TRAVIS_JOB_NUMBER.split('.')[1] === '1'
  } else if (process.env.APPVEYOR) {
    return /nodejs_version=7/.test(process.env.APPVEYOR_JOB_NAME)
  } else {
    return true
  }
}

if (isFirstJob()) {
  require('yaspeller/lib/cli')
} else {
  console.warn('To speed up CI spelling check runs only in first job')
}
