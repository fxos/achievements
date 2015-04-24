[![Build Status](https://travis-ci.org/fxos/achievements.svg?branch=master)](https://travis-ci.org/fxos/achievements)

# Achievements
This is an app for unlocking and collecting achievements within Firefox OS.


## We use the following prelimenary format

### For achievements:

```
{
  name: {String},
  description: {String},
  uid: {String},
  recipient: {
    identity: {String},
    type: {String},         // Such as email
  },
  achievement: {URL},       // URL to achievement class
  issuedOn: {DateTime},
  image: {Data URL or URL}, // Optional
  evidence: {URN}           // Optional, settings URN such as
                            // urn:achievements:sharing:true
}
```

### For achievement clases:

```
{
  name: {String},
  description: {String},
  image: {Data URL or URL},
  issuer: {URL},            // URL to the issuing app
  criteria: {URL}           // URL of the criteria for earning the achievement
  tags: {Array?Text}        // Optional list of tags
}
```

### For issuing app:

```
{
  name: {String},
  url: {URL},
  description: {String},    // Optional
  image: {Data URL or URL}
}
```

For more infrormation about the inspiration for the format of the
achievement data see: https://github.com/mozilla/openbadges-specification
