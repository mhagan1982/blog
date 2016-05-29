package com.jamesonnetworks.blog.domain.entry;

import org.joda.time.DateTime;

import java.util.Comparator;

/**
 * Created by bjameson on 1/29/15.
 */
public class EntryComporator implements Comparator<Entry> {
    @Override
    public int compare(Entry o1, Entry o2) {
        if(o1 == null) {
            return(-1);
        }
        else if(o2 == null) {
            return(1);
        }
        else {
            DateTime one = DateTime.parse(o1.getDate().substring(0, 8));
            DateTime two = DateTime.parse(o2.getDate().substring(0, 8));
            return one.compareTo(two);
        }
    }
}
