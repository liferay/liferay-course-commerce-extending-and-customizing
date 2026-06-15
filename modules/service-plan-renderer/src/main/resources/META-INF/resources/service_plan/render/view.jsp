<%--
    SYNTAX REFERENCE: Copy and adapt for the TODO sections below.

    Expando read example:
    String fieldVariable = GetterUtil.getString(
        expandoValueLocalService.getData(
            _companyId, _className, ExpandoTableConstants.DEFAULT_TABLE_NAME,
            "servicePlan_fieldName", _classPK, _defaultValue));

    Field display example:
    <tr style="border-bottom: 1px solid #dee2e6;">
        <th style="padding: 8px 4px; font-weight: 500; vertical-align: top; word-wrap: break-word;"><liferay-ui:message key="field-key" /></th>
        <td style="padding: 8px 4px; vertical-align: top; word-wrap: break-word;"><%= fieldVariable %></td>
    </tr>
--%>

<%@ include file="/init.jsp" %>

<%
CPDefinition cpDefinition = (CPDefinition)request.getAttribute(
	ServicePlanWebKeys.CP_DEFINITION);

ExpandoValueLocalService expandoValueLocalService =
	(ExpandoValueLocalService)request.getAttribute("expandoValueLocalService");

long _companyId = cpDefinition.getCompanyId();
String _className = CPDefinition.class.getName();
long _classPK = cpDefinition.getCPDefinitionId();
String _defaultValue = null;

String coverageDuration = GetterUtil.getString(
	expandoValueLocalService.getData(
		_companyId, _className, ExpandoTableConstants.DEFAULT_TABLE_NAME,
		"servicePlan_coverageDuration", _classPK, _defaultValue));

String gracePeriod = GetterUtil.getString(
        expandoValueLocalService.getData(
            cpDefinition.getCompanyId(),
            CPDefinition.class.getName(),
            ExpandoTableConstants.DEFAULT_TABLE_NAME,
            "servicePlan_gracePeriod",
            cpDefinition.getCPDefinitionId(),
            (String)null));

String maxNumberOfClaims = GetterUtil.getString(
	expandoValueLocalService.getData(
		_companyId, _className, ExpandoTableConstants.DEFAULT_TABLE_NAME,
		"servicePlan_maxNumberOfClaims", _classPK, _defaultValue));

String maxClaimValue = GetterUtil.getString(
        expandoValueLocalService.getData(
            cpDefinition.getCompanyId(),
            CPDefinition.class.getName(),
            ExpandoTableConstants.DEFAULT_TABLE_NAME,
            "servicePlan_maxClaimValue",
            cpDefinition.getCPDefinitionId(),
            (String)null));

String replacementMethod = GetterUtil.getString(
	expandoValueLocalService.getData(
		_companyId, _className, ExpandoTableConstants.DEFAULT_TABLE_NAME,
		"servicePlan_replacementMethod", _classPK, _defaultValue));

String underwriter = GetterUtil.getString(
	expandoValueLocalService.getData(
		_companyId, _className, ExpandoTableConstants.DEFAULT_TABLE_NAME,
		"servicePlan_underwriter", _classPK, _defaultValue));

String termsUrl = GetterUtil.getString(
	expandoValueLocalService.getData(
		_companyId, _className, ExpandoTableConstants.DEFAULT_TABLE_NAME,
		"servicePlan_termsUrl", _classPK, _defaultValue));
%>

<div class="service-plan-details mt-3" style="width: 100%; overflow: hidden;">
	<table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 14px;">
		<colgroup>
			<col style="width: 45%;">
			<col style="width: 55%;">
		</colgroup>
		<tbody>
			<tr style="border-bottom: 1px solid #dee2e6;">
				<th style="padding: 8px 4px; font-weight: 500; vertical-align: top; word-wrap: break-word;"><liferay-ui:message key="coverage-duration" /></th>
				<td style="padding: 8px 4px; vertical-align: top; word-wrap: break-word;"><%= coverageDuration %></td>
			</tr>

			<tr style="border-bottom: 1px solid #dee2e6;">
        		<th style="padding: 8px 4px; font-weight: 500; vertical-align: top; word-wrap: break-word;"><liferay-ui:message key="grace-period" /></th>
        		<td style="padding: 8px 4px; vertical-align: top; word-wrap: break-word;"><%= gracePeriod %></td>
    		</tr>

			<tr style="border-bottom: 1px solid #dee2e6;">
				<th style="padding: 8px 4px; font-weight: 500; vertical-align: top; word-wrap: break-word;"><liferay-ui:message key="max-number-of-claims" /></th>
				<td style="padding: 8px 4px; vertical-align: top; word-wrap: break-word;"><%= maxNumberOfClaims %></td>
			</tr>

			<tr style="border-bottom: 1px solid #dee2e6;">
        		<th style="padding: 8px 4px; font-weight: 500; vertical-align: top; word-wrap: break-word;"><liferay-ui:message key="max-claim-value" /></th>
        		<td style="padding: 8px 4px; vertical-align: top; word-wrap: break-word;"><%= maxClaimValue %></td>
    		</tr>

			<tr style="border-bottom: 1px solid #dee2e6;">
				<th style="padding: 8px 4px; font-weight: 500; vertical-align: top; word-wrap: break-word;"><liferay-ui:message key="replacement-method" /></th>
				<td style="padding: 8px 4px; vertical-align: top; word-wrap: break-word;"><%= replacementMethod %></td>
			</tr>
			<tr style="border-bottom: 1px solid #dee2e6;">
				<th style="padding: 8px 4px; font-weight: 500; vertical-align: top; word-wrap: break-word;"><liferay-ui:message key="underwriter" /></th>
				<td style="padding: 8px 4px; vertical-align: top; word-wrap: break-word;"><%= underwriter %></td>
			</tr>
			<tr>
				<th style="padding: 8px 4px; font-weight: 500; vertical-align: top; word-wrap: break-word;"><liferay-ui:message key="terms-url" /></th>
				<td style="padding: 8px 4px; vertical-align: top; word-wrap: break-word;">
					<c:if test="<%= !termsUrl.isEmpty() %>">
						<a href="<%= termsUrl %>" rel="noopener noreferrer" target="_blank" style="word-break: break-all;">
							<%= termsUrl %>
						</a>
					</c:if>
				</td>
			</tr>
		</tbody>
	</table>
</div>
