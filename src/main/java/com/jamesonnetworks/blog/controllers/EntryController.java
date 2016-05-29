package com.jamesonnetworks.blog.controllers;

import com.jamesonnetworks.blog.domain.entry.Entry;
import org.springframework.stereotype.Controller;

import java.io.File;
import java.util.ArrayList;

/**
 * Created by bjameson on 5/29/2016.
 */
@Controller
public class EntryController {

    public ArrayList<String> getAllEntries() {
        File folder = new File("entries/");
        File[] listOfFiles = folder.listFiles();
        for(File file : listOfFiles) {
            
        }
        return null;
    }

    public Entry getEntryByDate() {
        return null;
    }
}
