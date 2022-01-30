# Create Ubuntu service

[Running Your Node.js App With Systemd](https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1/)
* Create file at `/lib/systemd/system` name it `name.service` Please see example of .service file: `rockpaper.service`
* `sudo systemctl daemon-reload`
* `sudo systemctl start rockpaper`
* `sudo systemctl status rockpaper`
* `sudo systemctl enable rockpaper` auto start when ubuntu is booted
* `sudo systemctl disable rockpaper`

* use `tail -f /var/log/rockpaper.log` for console logs