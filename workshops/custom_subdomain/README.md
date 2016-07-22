# Setting Up A Custom `.tech` Domain With GitHub Pages

This tutorial will show you how to set up your own domain name with your site on GitHub Pages. Here's an example:

![](./img/example_url.png)

To go through this guide, you'll need to have submitted a request for a free `.tech` domain. If you have not yet, please head to https://free-tech-domain.hackclub.com and fill in your details. Here's an example from mine:

![](./img/free_custom_domain_form.png)

Once you've submitted the form, you'll get an email within 24 hours with a promo-code. Mine looks like this:

![](./img/promo_code_email.png)

Copy the promo-code in the email and open http://get.tech in a new tab.

![](./img/get_tech_landing_page.png)

Type in your `.tech` domain in the box and submit by clicking `Start .teching!`.

![](./img/checkout.png)

Apply the coupon you copied from the email:

![](./img/applying_coupon.png)

Create an account with http://get.tech:

![](./img/create_account.png)

Fill in your account information:

![](./img/get_tech_account_sign_up.png)

Click `Confirm order`:

![](./img/confirm_order.png)

Head back to your email and look for an email sent from get.tech about verifying your account. Once you find it, click the `verify account` link:

![](./img/verify_email.png)

You'll be brought to a page about your email being verified.

![](./img/email_verified.png)

From there click `Manage Orders` and select your domain:

![](./img/domain_orders.png)

Under the `DNS Management` text on the page, click `Manage DNS`:

![](./img/DNS_management.png)

A new window will pop-up. Click `CNAME Records`:

![](./img/manage_records.png)

Click `Add CNAME Record`:

![](./img/add_CNAME_record.png)

Change the `Value` to your GitHub pages link (`USERNAME.github.io`) and select the checkbox next to that input. Then click `Add Record`:

![](./img/CNAME_record_form.png)

If it worked, it should look something like this:

![](./img/record_added_successfully.png)

Now head over to your GitHub repository at https://github.com/USERNAME/USERNAME.github.io/settings (replace `USERNAME` with your GitHub username). Scroll down to the `Custom domain` setting and type in your `.tech` domain.

![](./img/custom_domain_in_GitHub_settings.png)

Awesome! Your `.tech` link should be set up within an hour. To test it out, go to your `.tech` link and try it out.
