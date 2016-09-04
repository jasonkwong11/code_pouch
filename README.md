# code_pouch

## Project Summary

This is a single page angular app for the purpose of collecting coding resources. I am hoping for this to be a community maintained project to help anyone learning to code. This is basically a searchable bookmark system for coding resources.

## Installation

To run this simply clone or fork it, run `bundle install`, `rake db:migrate` and then `rails s`.

Bower is included in the gem so if you want to add some front end dependencies, add them to the bower.json file and run `rake bower:install`

## Details

Bootstrap is used for the styles.

RSPEC is the testing framework for the rails backend.

## Future Plans

I fully intend on integrating the disqus api on each resource page.

There is going to be user authentication added soon.



## License

MIT

# Contribution Guide

## Status
**READY/IN DEVELOPMENT/HOLD**

## Migrations
YES | NO

## Description
A few sentences describing the overall goals of the pull request's commits.

## Todos
- [ ] Tests
- [ ] Documentation

## Deploy Notes
Notes regarding deployment the contained body of work.  These should note any
db migrations, etc.

## Steps to Test or Reproduce
Outline the steps to test or reproduce the PR here.

```sh
git pull --prune
git checkout <feature_branch>
bundle; script/server
```

## Impacted Areas in Application
List general components of the application that this PR will affect:

## Conclusion

Thanks for looking and if you would like to use it feel free!
