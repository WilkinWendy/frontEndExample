/**
 * unknown
 * unknown
 *
 * OpenAPI spec version: last
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
  * @description 用户
  * @property `[id]` 主键
  * @property `[name]` 姓名
  * @property `[password]` 密码
  * @property `[createTime]` 创建日期
  */
export interface ApiUserUpdateBody {
  /**
   * 主键
   */
  "id"?: string;
  /**
   * 姓名
   */
  "name"?: string;
  /**
   * 密码
   */
  "password"?: string;
  /**
   * 创建日期
   */
  "createTime"?: Date;
}

