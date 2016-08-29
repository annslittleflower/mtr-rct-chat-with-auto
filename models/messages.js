import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Sms = new Mongo.Collection('sms');
 
if (Meteor.isServer) {
  Meteor.publish('sms', function tasksPublication() {
    return Sms.find();
  });
}


Meteor.methods({
  'sms.insert'(text) {
    check(text, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Sms.insert({
        'text':text,
        'city':Meteor.user().profile.city,
        'userName':Meteor.user().profile.name
    });
  },
  
});
