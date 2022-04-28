package test1;

import java.util.ArrayList;

public class TestData {
	private ArrayList<Integer> items;

	public TestData() {
		this.items = new ArrayList<>();
	}

	public TestData(int items[]) {
		this();
		setItems(items);
	}

	public void setItems(int items[]) {
		for (int item : items) {
			this.items.add(item);
		}
	}
	public void push(int item) {
		this.items.add(item);
	}

	public void push(int idx, int item) {
		this.items.add(idx, item);
	}

	public int pop() {
		int lastIdx = this.items.size() - 1;
		int item = this.items.get(lastIdx);
		this.items.remove(lastIdx);
		return item;

	}

	public Object getItem(int idx) {
		if (0 <= idx && idx < this.items.size()) {
			return this.items.get(idx);
		}
		return null;
	}

	public void clear() {
		this.items.clear();
	}

	public int getSize() {
		return this.items.size();
	}
}
