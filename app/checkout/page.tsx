"use client";

import Container from "@/components/containers/container";
import Navbar from "@/components/navigation/navbar";
import Input from "@/components/form/input";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import clsx from "clsx";

//todo: shouldn't open without any items in cart
function Checkout() {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [zipCode, setZipCode] = useState();
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [eMoneyNumber, setEMoneyNumber] = useState();
	const [eMoneyPin, setEMoneyPin] = useState();
	const [paymentMethod, setPaymentMethod] = useState("e-money");

	return (
		<main className="space-y-4 md:space-y-8">
			<Container parentClassName="bg-[#000]">
				<Navbar />
			</Container>

			<Container className="px-6 lg:px-0">
				<span
					className="opacity-50 cursor-pointer hover:opacity-100"
					onClick={() => router.back()}
				>
					Go Back
				</span>
			</Container>

			<div className="space-y-16 md:space-y-24 pt-4 md:pt-0">
				<Container className="flex flex-col px-6 lg:px-0 gap-8">
					<form action="">
						<div className="bg-white p-6 rounded-lg">
							<h1 className="h3">CHECKOUT</h1>

							<div className="mt-8 space-y-6">
								<div className="flex flex-col gap-2">
									<h2 className="sub-title text-[var(--fm-primary)]">
										BILLING DETAILS
									</h2>

									<Input
										label="Name"
										placeholder="Alexei Ward"
										type="text"
										value={name}
										setValue={setName}
									/>
									<Input
										label="Email Address"
										placeholder="alexei@mail.com"
										type="email"
										value={email}
										setValue={setEmail}
									/>
									<Input
										label="Phone Number"
										placeholder="+1 202-555-0136"
										type="tel"
										value={phoneNumber}
										setValue={setPhoneNumber}
									/>
								</div>

								<div className="flex flex-col gap-2">
									<h2 className="sub-title text-[var(--fm-primary)]">
										SHIPPING INFO
									</h2>

									<Input
										label="Your Address"
										placeholder="1137 Williams Avenue"
										type="text"
										value={address}
										setValue={setAddress}
									/>
									<Input
										label="ZIP Code"
										placeholder="10001"
										type="text"
										value={zipCode}
										setValue={setZipCode}
									/>
									<Input
										label="City"
										placeholder="New York"
										type="text"
										value={city}
										setValue={setCity}
									/>
									<Input
										label="Country"
										placeholder="United States"
										type="text"
										value={country}
										setValue={setCountry}
									/>
								</div>

								<div className="flex flex-col gap-2">
									<h2 className="sub-title text-[var(--fm-primary)]">
										Payment Method
									</h2>

									<RadioGroup
										defaultValue={paymentMethod}
										onValueChange={(e) => setPaymentMethod(e)}
										className=""
									>
										<div
											className={clsx(
												"flex items-center gap-3 border rounded-lg px-4 py-3 font-bold text-[14px] cursor-pointer",
												paymentMethod === "e-money" &&
													"border-[var(--fm-primary)]"
											)}
										>
											<RadioGroupItem value="e-money" />
											<label htmlFor="">e-Money</label>
										</div>
										<div
											className={clsx(
												"flex items-center gap-3 border rounded-lg px-4 py-3 font-bold text-[14px] cursor-pointer",
												paymentMethod === "cash" && "border-[var(--fm-primary)]"
											)}
										>
											<RadioGroupItem value="cash" />
											<label htmlFor="">Cash on Delivery</label>
										</div>
									</RadioGroup>
									<Input
										label="e-Money Number"
										placeholder="238521993"
										type="number"
										value={eMoneyNumber}
										setValue={setEMoneyNumber}
									/>
									<Input
										label="e-Money PIN"
										placeholder="6891"
										type="number"
										value={eMoneyPin}
										setValue={setEMoneyPin}
									/>
								</div>
							</div>
						</div>

						<div className="bg-white p-6 rounded-lg">
							<h2 className="h3">SUMMARY</h2>
												
						</div>
					</form>
				</Container>
			</div>
		</main>
	);
}

export default Checkout;
