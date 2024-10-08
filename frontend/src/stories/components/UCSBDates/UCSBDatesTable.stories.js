import React from "react";
import UCSBDatesTable from "main/components/UCSBDates/UCSBDatesTable";
import { ucsbDatesFixtures } from "fixtures/ucsbDatesFixtures";
import { currentUserFixtures } from "fixtures/currentUserFixtures";
import { http, HttpResponse } from "msw";

export default {
  title: "components/UCSBDates/UCSBDatesTable",
  component: UCSBDatesTable,
};

const Template = (args) => {
  return <UCSBDatesTable {...args} />;
};

export const Empty = Template.bind({});

Empty.args = {
  dates: [],
};

export const ThreeItemsOrdinaryUser = Template.bind({});

ThreeItemsOrdinaryUser.args = {
  dates: ucsbDatesFixtures.threeDates,
  currentUser: currentUserFixtures.userOnly,
};

export const ThreeItemsAdminUser = Template.bind({});
ThreeItemsAdminUser.args = {
  dates: ucsbDatesFixtures.threeDates,
  currentUser: currentUserFixtures.adminUser,
};

ThreeItemsAdminUser.parameters = {
  msw: [
    http.delete("/api/ucsbdates", () => {
      return HttpResponse.json({}, { status: 200 });
    }),
  ],
};
