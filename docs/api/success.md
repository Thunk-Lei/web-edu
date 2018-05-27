# 成绩查询 API 综述

成绩查询类接口主要包含 `成绩查询` 接口

> 成绩查询： `https://api.aizuoshe.com/v1/success`

## 成绩查询

> `POST` `https://api.aizuoshe.com/v1/success`

> 请求方式： `POST` 　数据类型： `Object`

!> POST 提交数据示例：

```json
{
  "cookie": "ASP.NET_SessionId=xfr1sv45rgtfng55c4noewf4"
}
```

!> 正确请求返回示例：

```json
{
  "status": 200,
  "data":[
    {
    "classname": "语文",  //课程名称
    "credit": "3.0",     //学分
    "nature": "通识必修",    //类别
    "mode": "考试",   //考核方式
    "xdxz": "初修",   //修读性质
    "success": "125",   //成绩
    "notes": "补考"   //备注
    },
    {
    "classname": "语文",  //课程名称
    "credit": "3.0",     //学分
    "nature": "通识必修",    //类别
    "mode": "考试",   //考核方式
    "xdxz": "初修",   //修读性质
    "success": "125",   //成绩
    "notes": "补考"   //备注
    }
  ]
    ......
}
```

!> 错误请求返回示例：

```json
{
  "status": "500",
  "message": "服务器连接超时"
}
```

---

<center>Copyright © 2016 - 2018 [HuiChuang](https://www.aizuoshe.com ':target=_blank :ignore 慧创科技'). All Rights Reserved</center>
