# Lab 6 Prep - Snapshot VM - Container web app

This repo is focused on content for one of the labs in the RHHI-V Workshop. In here, we will do the following:

- deploy VM onto RHHI/RHV from the RHEL 7 kvm guest template.
- configure the VM with a containerized web application
- Verify
  - update web application (This should fail)
  - take snapshot
  - update web application (This should succeed)
  - revert to snapshot
- export the VM as an OVA

From here, we copy the OVA into the Ravello environment and make a blueprint, along with the update playbook to be used by the students during the lab.


### General Steps and Requirements

Required:
 - RHHI / RHV environment
 - RHEL 7.6 kvm guest template
 - Controller node updated with correct IP/hostnames for 'c-webapp' group in the /etc/ansible/hosts

1. ansible-playbook deploy.yml
2. ansible-playbook -u root configure.yml -k
3. take snapshot
4. ansible-playbook -u root update.yml -k
5. revert to old snapshot


### Part of the Big Picture series
