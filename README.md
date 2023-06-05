# MAC_Address_Mask

MAC Address Mask script

## UserScript

TBD

### MAC Address All Mask

Code: mac_address_all_mask.user.js

Before:

``` body
00:00:5e:00:53:01
00-00-5e-00-53-01
00.00.5e.00.53.01
0000:5e00:5301
0000-5e00-5301
0000.5e00.5301
```

After:

``` body
**:**:**:**:**:**
**:**:**:**:**:**
**:**:**:**:**:**
**:**:**:**:**:**
**:**:**:**:**:**
**:**:**:**:**:**
```

### MAC Address Lower Half Mask

Code: mac_address_lower_half_mask.user.js

Before:

``` body
00:00:5e:00:53:01
00-00-5e-00-53-01
00.00.5e.00.53.01
0000:5e00:5301
0000-5e00-5301
0000.5e00.5301
```

After:

``` body
00:00:5e:**:**:**
00:00:5e:**:**:**
00:00:5e:**:**:**
00:00:5e:**:**:**
00:00:5e:**:**:**
00:00:5e:**:**:**
```
