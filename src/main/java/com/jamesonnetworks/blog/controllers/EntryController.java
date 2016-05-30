package com.jamesonnetworks.blog.controllers;

import com.jamesonnetworks.blog.domain.entry.Entry;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.util.ArrayList;

/**
 * Created by bjameson on 5/29/2016.
 */
@RestController
@RequestMapping("/v1")
@EnableAutoConfiguration
public class EntryController {

    @RequestMapping(path="/entries", method= RequestMethod.GET)
    public ArrayList<String> getAllEntries() {
        ArrayList<String> entries = new ArrayList<>();
        PathMatchingResourcePatternResolver resourcePatternResolver = new PathMatchingResourcePatternResolver();
        Resource[] folderList = null;
        try {
            folderList = resourcePatternResolver.getResources("classpath:static/entries/*.json");
        }
        catch(Exception e) {

        }
        for(Resource file : folderList) {
            String currentFile = file.getFilename();
            if(currentFile.compareTo("template.json") != 0) {
                entries.add(file.getFilename());
            }
        }
        return entries;
    }

    public Entry getEntryByDate() {
        return null;
    }
}
