# ServiceBay
==========

This is a Meteor.js SaaS project, and is very much a work in progress.

Setup for testing:

1. Install Meteor.js: 
On OS X or Linux?  Install the latest official Meteor release from your terminal:

```bash
curl https://install.meteor.com/ | sh
```

2. Clone this repo.
3. Run it locally:

```bash
cd myapp
meteor npm install
meteor
# Meteor server running on: http://localhost:3000/
```
4. Visit http://localhost:3000/ and you should see the ServiceBay site.

## Create Sites

You can login with the admin credentials: 

**Login:** admin@example.com 
**Password:** 123456 

normal credentials: 

**Login:** normal@example.com 
**Password:** 123456 

OR create a new account. 

### Dashboard

This is where you will find the controls to create and manage your various sites. 

Start by creating a new site, with the "domain" of **127.0.0.1:3000** so you are able to see it working locally. If you used the "admin" account, you will have the ability to do some extra administrative tasks to the sites on the dashboard. 

The create workflow is not complete, after you create a site, you will have to return to the Dashboard to see the site listing, or use the **"Build Your Site"** wysiwyg editor. You can **View Site** to open http://127.0.0.1:3000 in another browser window. While making edits via the **"Build Your Site"**, choose to "Save Changes", the open window will update in real time, even if you change themes.

## Project Status

This is under active, but slow development, and has bugs. 
