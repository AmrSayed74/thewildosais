// import { useSettings } from "features/settings/useSettings";
// import { useUpdateSetting } from "features/settings/useUpdateSetting";

// import Form from "ui/Form";
// import FormRow from "ui/FormRow";
// import Input from "ui/Input";
// import Spinner from "ui/Spinner";

// function UpdateSettingsForm() {
//   const {
//     settings: {
//       minBookingLength,
//       maxBookingLength,
//       maxGuestsPerBooking,
//       breakfastPrice,
//     } = {},
//     isLoading,
//   } = useSettings();
//   const { mutate: updateSetting, isLoading: isUpdating } = useUpdateSetting();

//   // return <Spinner />;
//   if (isLoading) return <Spinner />;

//   function handleBlur(e, field) {
//     const { value } = e.target;

//     if (!value) return;
//     updateSetting({ [field]: value });
//   }

//   // This time we are using UNCONTROLLED fields, so we will NOT store state
//   return (
//     <Form>
//       <FormRow label="Minimum nights/booking">
//         <Input
//           type="number"
//           defaultValue={minBookingLength}
//           onBlur={(e) => handleBlur(e, "minBookingLength")}
//           disabled={isUpdating}
//           id="min-nights"
//         />
//       </FormRow>
//       <FormRow label="Maximum nights/booking">
//         <Input
//           type="number"
//           defaultValue={maxBookingLength}
//           onBlur={(e) => handleBlur(e, "maxBookingLength")}
//           disabled={isUpdating}
//           id="max-nights"
//         />
//       </FormRow>
//       <FormRow label="Maximum guests/booking">
//         <Input
//           type="number"
//           defaultValue={maxGuestsPerBooking}
//           onBlur={(e) => handleBlur(e, "maxGuestsPerBooking")}
//           disabled={isUpdating}
//           id="max-guests"
//         />
//       </FormRow>
//       <FormRow label="Breakfast price">
//         <Input
//           type="number"
//           defaultValue={breakfastPrice}
//           onBlur={(e) => handleBlur(e, "breakfastPrice")}
//           disabled={isUpdating}
//           id="breakfast-price"
//         />
//       </FormRow>
//     </Form>
//   );
// }

// export default UpdateSettingsForm;
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { isLoading, settings: { ...settings } = {} } = useSettings();
  const { updateSettings, isUpdating } = useUpdateSettings();

  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings;

  if (isLoading) return <Spinner />;

  const updateHandler = (e, field) => {
    if (!e.target.value) return;
    updateSettings({ [field]: e.target.value });
  };

  return (
    <Form type="modal">
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => updateHandler(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => updateHandler(e, "maxBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => updateHandler(e, "maxGuestsPerBooking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => updateHandler(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}
export default UpdateSettingsForm;
