Why would you want to call a third party API on the FRONTEND instead of the back end.  See Schemes A and B below. 

Evaluation: 2 valid answers satisfy this question though more answers are possible.

Scheme A (Client making 3rd party HTTP call):
```
 /---------                |----------|
|          |  http calls   |          |
|  browser | ------------> |    my    |
|          | ------|       |  server  |
|----------|       |       |----------|
                   |
                   |       |----------|
                   |------>|          |
                           | 3rd party|
                           |    API   |
                           |----------|

```

Scheme B (my server making 3rd party HTTP request):
```

 /---------                |----------|
|          |  http calls   |          |
|  browser | ------------> |    my    |
|          |               |  server  |
|----------|               |----------|
                                |
                                |
                                \/
                           |----------|
                           |          |
                           | 3rd party|
                           |    API   |
                           |----------|

```


### Solution here please ...
