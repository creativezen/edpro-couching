export const radioButtons = ({ month_01, month_03, month_06 }) => {

  let radioHTML =
		`<label class="radio">
			<input class="radio__input" name="duration" value="${month_01}" type="radio">
			<span class="radio__box"></span>
			Оплата 1 месяц - <span class="modal_price">${month_01}</span> ₽
		</label>
		<label class="radio">
			<input class="radio__input" name="duration" value="${month_03}" type="radio">
			<span class="radio__box"></span>
			Оплата 3 месяца - <span class="modal_price">${month_03}</span> ₽
		</label>
		<label class="radio">
			<input class="radio__input" name="duration" value="${month_06}" type="radio">
			<span class="radio__box"></span>
			Оплата 6 месяцев - <span class="modal_price">${month_06}</span> ₽
		</label>`

	return radioHTML
}