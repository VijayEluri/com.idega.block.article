/*
 * $Id: SearchArticlePage.java,v 1.1 2004/10/26 12:45:00 joakim Exp $
 *
 * Copyright (C) 2004 Idega. All Rights Reserved.
 *
 * This software is the proprietary information of Idega.
 * Use is subject to license terms.
 *
 */
package com.idega.block.article;

import javax.faces.component.UIComponent;
import javax.faces.component.html.HtmlPanelGrid;

import com.idega.block.article.component.SearchArticleBlock;
import com.idega.webface.WFPanelUtil;
import com.idega.webface.WFUtil;

/**
 * Search article test/demo page. 
 * <p>
 * Last modified: $Date: 2004/10/26 12:45:00 $ by $Author: joakim $
 *
 * @author Anders Lindman
 * @version $Revision: 1.1 $
 */
public class SearchArticlePage extends CMSPage {

	/**
	 * Creates the page content. 
	 */
	protected void createContent() {
		add(WFUtil.getBannerBox());
		add(getSearchArticleBlock());		
	}
	
	/**
	 * Returns a search article block.
	 */
	protected UIComponent getSearchArticleBlock() {
		HtmlPanelGrid ap = WFPanelUtil.getApplicationPanel();
		ap.getChildren().add(getFunctionBlock());
		SearchArticleBlock sab = new SearchArticleBlock("Search articles");
		ap.getChildren().add(sab);
		return ap;
	}
}
