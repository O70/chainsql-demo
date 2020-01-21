package org.thraex.chainsql.account.service;

import org.json.JSONObject;

/**
 * @author 鬼王
 * @date 2020/01/13 15:45
 */
public interface AccountService {

    /**
     * 生成账户地址
     *
     * @return
     */
    JSONObject generate();

}
