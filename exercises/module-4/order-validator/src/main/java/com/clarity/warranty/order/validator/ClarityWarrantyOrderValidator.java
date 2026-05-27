package com.clarity.warranty.order.validator;

import com.liferay.commerce.model.CommerceOrder;
import com.liferay.commerce.model.CommerceOrderItem;
import com.liferay.commerce.order.CommerceOrderValidator;
import com.liferay.commerce.order.CommerceOrderValidatorResult;
import com.liferay.commerce.product.model.CPInstance;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.language.LanguageUtil;
import com.liferay.portal.kernel.util.ResourceBundleUtil;

import java.math.BigDecimal;

import java.util.Locale;
import java.util.ResourceBundle;

import org.osgi.service.component.annotations.Component;

/**
 * @author Ricky Pan
 */
@Component(
    property = {
        "commerce.order.validator.key=clarity-warranty-validator",
        "commerce.order.validator.priority:Integer=50"
    },
    service = CommerceOrderValidator.class
)
public class ClarityWarrantyOrderValidator implements CommerceOrderValidator {

    @Override
    public String getKey() {
        // TODO

        return "INSERT_KEY";
    }

    @Override
    public CommerceOrderValidatorResult validate(
            Locale locale, CommerceOrder commerceOrder, CPInstance cpInstance,
            String json, BigDecimal quantity, boolean child)
        throws PortalException {

        if (cpInstance == null) {
            return new CommerceOrderValidatorResult(true);
        }

        // TODO

        return new CommerceOrderValidatorResult(true);
    }

    @Override
    public CommerceOrderValidatorResult validate(
            Locale locale, CommerceOrderItem commerceOrderItem)
        throws PortalException {

        // TODO

        return new CommerceOrderValidatorResult(true);
    }

    private CommerceOrderValidatorResult _validateIncompatibility(
        Locale locale, CommerceOrder commerceOrder, String incomingSku) {

        if ((commerceOrder == null) || (incomingSku == null)) {
            return new CommerceOrderValidatorResult(true);
        }

        if (!_WARRANTY_1YR_SKU.equals(incomingSku) &&
            !_WARRANTY_LFT_SKU.equals(incomingSku)) {

            return new CommerceOrderValidatorResult(true);
        }

        String conflictingSku =
            _WARRANTY_1YR_SKU.equals(incomingSku) ? _WARRANTY_LFT_SKU :
                _WARRANTY_1YR_SKU;

        for (CommerceOrderItem item : commerceOrder.getCommerceOrderItems()) {
            if (conflictingSku.equals(item.getSku())) {
                ResourceBundle resourceBundle = ResourceBundleUtil.getBundle(
                    "content.Language", locale, getClass());

                // TODO

                return new CommerceOrderValidatorResult(
                    false,
                    LanguageUtil.format(
                        resourceBundle,
                        "warranty-restriction-you-cannot-combine-x-and-x-in-" +
                            "the-same-order",
                        new String[] {_WARRANTY_LFT_SKU, _WARRANTY_1YR_SKU}));
            }
        }

        return new CommerceOrderValidatorResult(true);
    }

    // TODO

    private static final String _WARRANTY_1YR_SKU = "INSERT-1YEAR-SKU";

    private static final String _WARRANTY_LFT_SKU = "INSERT-LIFETIME-SKU";

}