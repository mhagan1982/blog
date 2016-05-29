
package com.jamesonnetworks.blog.domain.entry;

import java.util.List;

public class Markdown{
   	private List<Sections> sections;

 	public List<Sections> getSections(){
		return this.sections;
	}
	public void setSections(List<Sections> sections){
		this.sections = sections;
	}
}
