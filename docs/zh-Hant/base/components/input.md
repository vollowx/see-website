---
title: Input - Base - SEELE
---

# Input（輸入框）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`FormAssociated`](../mixins/form-associated.md)

基於文本的表單輸入基礎組件。

## 屬性

| 名稱           | 類型    | 默認值   | 描述                                                   |
| -------------- | ------- | -------- | ------------------------------------------------------ |
| `type`         | String  | `'text'` | 輸入類型（text、email、password 等）。                 |
| `value`        | String  | `''`     | 輸入框的當前值。                                       |
| `placeholder`  | String  | `''`     | 輸入框爲空時顯示的佔位符文本。                         |
| `required`     | Boolean | `false`  | 輸入框是否爲表單提交所必需。                           |
| `readOnly`     | Boolean | `false`  | 輸入框是否爲只讀。                                     |
| `multiple`     | Boolean | `false`  | 輸入框是否接受多個值（例如，email）。                  |
| `min`          | String  | `''`     | 數字或日期輸入的最小值。                               |
| `max`          | String  | `''`     | 數字或日期輸入的最大值。                               |
| `step`         | String  | `''`     | 數字輸入的步進間隔。                                   |
| `minLength`    | Number  | `-1`     | 文本輸入的最小長度。                                   |
| `maxLength`    | Number  | `-1`     | 文本輸入的最大長度。                                   |
| `pattern`      | String  | `''`     | 用於驗證的正則表達式模式。                             |
| `autocomplete` | String  | `''`     | 瀏覽器的自動完成提示。                                 |

注意：還從 [`FormAssociated`](../mixins/form-associated.md) 混合類繼承 `disabled` 屬性。
