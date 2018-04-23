# 成绩查询 API 综述

成绩查询类接口主要包含 `成绩查询` 接口

> 成绩查询： `https://api.aizuoshe.com/success`

## 成绩查询

> `POST` `https://api.aizuoshe.com/success`

> 请求方式： `POST` 　数据类型： `Object`

!> POST 提交数据示例：

```json
{
  "SJ": "0", //0、1 原始成绩 or 有效成绩
  "SelXNXQ": "0", //0、1、2 入学以来 or 学年 or 学期
  "zfx_flag": "0", //0、1 主修 or 辅修
  "zxf": "0" //定值
}

```

!> 正确请求返回示例：

```json
{
  "status": "200",
  {
    "xq": "2014-2015学年第一学期",
    {
      "classname": "语文",
      "credit": "3.0",
      "nature": "通识必修",
      "success": "125",
      "notes": "补考"
    },
    {
      "classname": "数学",
      "credit": "4.5",
      "nature": "通识必修",
      "success": "137",
      "notes": "重修"
    }
  },
  {
    "xq": "2014-2015学年第二学期",
    {
      "classname": "概率与数理统计",
      "credit": "3.0",
      "nature": "学科基础",
      "success": "87",
      "notes": ""
    },
    {
      "classname": "口才艺术与社交礼仪",
      "credit": "1.5",
      "nature": "公共课/任选课",
      "success": "95",
      "notes": ""
    }
    ......
  }
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