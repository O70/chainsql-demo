package org.thraex.chainsql.asset.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thraex.chainsql.asset.service.AssetService;

/**
 * @author 鬼王
 * @date 2020/01/13 14:23
 */
@RestController
@RequestMapping("asset")
public class AssetController {

    @Autowired
    private AssetService assetService;

    @PostMapping
    public String add() {
        return "add";
    }

    @PutMapping
    public String update() {
        return "update";
    }

    @DeleteMapping
    public String delete() {
        return "delete";
    }

    @GetMapping
    public String query() {
        return "query";
    }

}
