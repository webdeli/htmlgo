/**
 * Created by Web Deli™
 * User: Web Deli™
 * Date: 15/11/12
 * Time: 10:23 AM
 *
 * @file
 * This code assists the developer by checking WCAG 2.0 conformance
 *
 */

// In the example below we define and use the method sayHello() for the Person class.

function wcag_check(page) {
    this.page = page;
    alert('WCAG report instantiated');
}

wcag_check.prototype.check = function()
{
    // @todo do check
    alert ('@todo - return pass/fail report');
};

var wcag_report = new wcag_check('page');

// call the Person sayHello method.
wcag_report.check(); // pass/fail report