package com.jamesonnetworks.blog.controllers;

import com.google.gson.Gson;
import com.jamesonnetworks.blog.domain.entry.Entry;
import org.apache.log4j.ConsoleAppender;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.util.ArrayList;

/**
 * Created by bjameson on 5/29/2016.
 */
@RestController
@RequestMapping("/v1")
@EnableAutoConfiguration
public class EntryController {

    private static final Logger log = LoggerFactory.getLogger(EntryController.class);

    @RequestMapping(path="/entries", method= RequestMethod.GET)
    public ArrayList<Entry> getAllEntries() {
        ArrayList<File> entries = new ArrayList<File>();
        ArrayList<Entry> jsonEncodedEntries = new ArrayList<>();
        PathMatchingResourcePatternResolver resourcePatternResolver = new PathMatchingResourcePatternResolver();
        Resource[] folderList = null;
        try {
            folderList = resourcePatternResolver.getResources("classpath:static/entries/*.json");
        }
        catch(Exception e) {
            log.info(e.getMessage());
        }
        for(Resource file : folderList) {
            String currentFile = file.getFilename();
            if (currentFile.compareTo("template.json") != 0) {
                try {
                    entries.add(file.getFile());
                } catch (Exception e) {
                    log.info(e.getMessage());
                }
            }
        }

        for(File entry : entries) {
            StringBuilder sb = new StringBuilder();

            try {
                FileReader fileReader;
                fileReader = new FileReader(entry);

                BufferedReader bufferedReader = new BufferedReader(fileReader);

                String line;

                while ((line = bufferedReader.readLine()) != null) {
                    sb.append(line);
                }

                fileReader.close();

            } catch(Exception e) {
                log.info(e.getMessage());
            }
            Gson gson = new Gson();
            Entry entryObject = gson.fromJson(sb.toString(), Entry.class);
            jsonEncodedEntries.add(entryObject);
        }

        return jsonEncodedEntries;
    }

    public Entry getEntryByDate() {
        return null;
    }
}
