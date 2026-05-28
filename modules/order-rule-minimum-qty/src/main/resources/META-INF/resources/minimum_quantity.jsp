<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %><%@
taglib uri="http://liferay.com/tld/commerce-ui" prefix="commerce-ui" %>

<%@ page import="com.clarityvisionsolutions.commerce.order.rule.web.display.context.MinimumQuantityDisplayContext" %>

<%@ page import="com.liferay.portal.kernel.util.WebKeys" %>

<%
MinimumQuantityDisplayContext minimumQuantityDisplayContext = (MinimumQuantityDisplayContext)request.getAttribute(WebKeys.PORTLET_DISPLAY_CONTEXT);
%>

<div class="row">
	<div class="col">
		<commerce-ui:panel
			bodyClasses="flex-fill"
			title="Configuration"
		>
			<div class="row">
				<div class="col">
					<%-- TODO: Add Minimum Quantity field here --%>
				</div>
			</div>
		</commerce-ui:panel>
	</div>
</div>