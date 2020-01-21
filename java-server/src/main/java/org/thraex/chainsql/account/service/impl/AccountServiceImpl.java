package org.thraex.chainsql.account.service.impl;

import com.peersafe.chainsql.core.Chainsql;
import lombok.extern.log4j.Log4j2;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.thraex.chainsql.account.service.AccountService;

/**
 * @author 鬼王
 * @date 2020/01/13 15:51
 */
@Service
@Log4j2
public class AccountServiceImpl implements AccountService {

    @Override
    public JSONObject generate() {
        Chainsql cs = new Chainsql();
        JSONObject account = cs.generateAddress();
        log.info(account);

        return account;
    }

}
