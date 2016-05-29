
package com.jamesonnetworks.blog.domain.entry;

public class Entry{
   	private String date;
   	private Markdown markdown;
   	private String subtitle;
   	private String title;
   	private String uri;

    public Entry() {
        //TODO: Parse a json entry and create myself from it
    }

    public Entry(Entry entry) {
        //TODO: Parse a json entry and create myself from it
    }

   	public Entry(String jsonForEntry) {
   		//TODO: Parse a json entry and create myself from it
   	}
   	
 	public String getDate(){
		return this.date;
	}
	public void setDate(String date){
		this.date = date;
	}
 	public Markdown getMarkdown(){
		return this.markdown;
	}
	public void setMarkdown(Markdown markdown){
		this.markdown = markdown;
	}
 	public String getSubtitle(){
		return this.subtitle;
	}
	public void setSubtitle(String subtitle){
		this.subtitle = subtitle;
	}
 	public String getTitle(){
		return this.title;
	}
	public void setTitle(String title){
		this.title = title;
	}
 	public String getUri(){
		return this.uri;
	}
	public void setUri(String uri){
		this.uri = uri;
	}
}
