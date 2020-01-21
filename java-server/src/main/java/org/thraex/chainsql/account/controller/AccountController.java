package org.thraex.chainsql.account.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thraex.chainsql.account.service.AccountService;

/**
 * @author 鬼王
 * @date 2020/01/13 15:44
 */
@RestController
@RequestMapping("account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping
    public JSONObject signUp() {
        return accountService.generate();
    }

}
