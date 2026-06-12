import ClayForm, {ClayInput} from '@clayui/form';
import React, {useState} from 'react';

const namespace =
    '_com_liferay_commerce_checkout_web_internal_portlet_' +
    'CommerceCheckoutPortlet_';

export default function CheckoutStepApp() {
    const [poNumber, setPoNumber] = useState('');
    const [touched, setTouched] = useState(false);

    const isInvalid = touched && poNumber.trim() === '';

    return (
        <ClayForm>
            <h3 className="text-dark">B2B Purchase Order</h3>

            <p className="text-secondary">Please enter your authorized PO Number to proceed with this wholesale transaction.</p>

            <ClayForm.Group className={isInvalid ? 'has-error' : ''}>
                <label htmlFor={`${namespace}poNumber`}>
                    Purchase Order Number
                </label>

                <ClayInput
                    id={`${namespace}poNumber`}
                    name={`${namespace}poNumber`}
                    placeholder="e.g., PO-998877"
                    required={true}
                    type="text"
                    value={poNumber}
                    onChange={(event) => setPoNumber(event.target.value)}
                    onBlur={() => setTouched(true)}
                />

                {isInvalid && (
                    <ClayForm.FeedbackGroup>
                        <ClayForm.FeedbackItem>
                            A purchase order number is required.
                        </ClayForm.FeedbackItem>
                    </ClayForm.FeedbackGroup>
                )}
            </ClayForm.Group>
        </ClayForm>
    );
}